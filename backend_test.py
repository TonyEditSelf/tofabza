#!/usr/bin/env python3
"""
Backend API Testing for Tofabza
Tests all three API endpoints: create-order, verify-payment, contact
"""

import requests
import json
import os
from datetime import datetime

# Get base URL from environment
BASE_URL = "https://creative-studio-572.preview.emergentagent.com"
API_BASE = f"{BASE_URL}/api"

def test_create_order():
    """Test POST /api/create-order endpoint"""
    print("\n=== Testing POST /api/create-order ===")
    
    # Test 1: Valid order creation
    print("\n1. Testing valid order creation...")
    payload = {
        "amount": 1499900,  # 14999.00 INR in paise
        "currency": "INR",
        "items": [
            {
                "id": "starter",
                "name": "Starter",
                "price": 14999,
                "qty": 1
            }
        ]
    }
    
    try:
        response = requests.post(f"{API_BASE}/create-order", 
                               json=payload, 
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ['id', 'amount', 'currency', 'mock']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ Missing required fields: {missing_fields}")
                return False
            
            if data.get('mock') != True:
                print(f"❌ Expected mock=true for placeholder keys, got: {data.get('mock')}")
                return False
                
            if data.get('amount') != 1499900:
                print(f"❌ Expected amount=1499900, got: {data.get('amount')}")
                return False
                
            print("✅ Valid order creation test passed")
        else:
            print(f"❌ Expected status 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False
    
    # Test 2: Invalid amount (0)
    print("\n2. Testing invalid amount (0)...")
    try:
        invalid_payload = {"amount": 0, "currency": "INR", "items": []}
        response = requests.post(f"{API_BASE}/create-order", 
                               json=invalid_payload,
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ Invalid amount test passed (400 returned)")
        else:
            print(f"❌ Expected status 400 for invalid amount, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False
    
    # Test 3: Missing amount
    print("\n3. Testing missing amount...")
    try:
        missing_payload = {"currency": "INR", "items": []}
        response = requests.post(f"{API_BASE}/create-order", 
                               json=missing_payload,
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ Missing amount test passed (400 returned)")
        else:
            print(f"❌ Expected status 400 for missing amount, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False
    
    return True

def test_verify_payment():
    """Test POST /api/verify-payment endpoint"""
    print("\n=== Testing POST /api/verify-payment ===")
    
    # Test with mock data (should return success=true, mock=true for placeholder keys)
    print("\n1. Testing payment verification with mock data...")
    payload = {
        "razorpay_order_id": "order_mock_123",
        "razorpay_payment_id": "pay_mock",
        "razorpay_signature": "sig"
    }
    
    try:
        response = requests.post(f"{API_BASE}/verify-payment", 
                               json=payload,
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') == True and data.get('mock') == True:
                print("✅ Payment verification test passed (mock mode)")
                return True
            else:
                print(f"❌ Expected success=true and mock=true, got: {data}")
                return False
        else:
            print(f"❌ Expected status 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False

def test_contact():
    """Test POST /api/contact endpoint"""
    print("\n=== Testing POST /api/contact ===")
    
    # Test 1: Valid contact form submission
    print("\n1. Testing valid contact form submission...")
    payload = {
        "name": "John Smith",
        "email": "john.smith@example.com",
        "service": "Website Design",
        "message": "I need a premium website for my business. Please contact me to discuss requirements and pricing."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", 
                               json=payload,
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('success') == True and 'message' in data:
                print("✅ Valid contact form test passed")
            else:
                print(f"❌ Expected success=true with message, got: {data}")
                return False
        else:
            print(f"❌ Expected status 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False
    
    # Test 2: Missing required fields
    print("\n2. Testing missing required fields...")
    try:
        invalid_payload = {
            "name": "John Smith",
            "email": "john.smith@example.com"
            # Missing service and message
        }
        response = requests.post(f"{API_BASE}/contact", 
                               json=invalid_payload,
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "All fields are required" in data.get('error', ''):
                print("✅ Missing fields validation test passed")
            else:
                print(f"❌ Expected 'All fields are required' error, got: {data}")
                return False
        else:
            print(f"❌ Expected status 400 for missing fields, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False
    
    # Test 3: Invalid email format
    print("\n3. Testing invalid email format...")
    try:
        invalid_payload = {
            "name": "John Smith",
            "email": "notanemail",
            "service": "Website Design",
            "message": "Test message"
        }
        response = requests.post(f"{API_BASE}/contact", 
                               json=invalid_payload,
                               headers={"Content-Type": "application/json"},
                               timeout=30)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            data = response.json()
            if "Invalid email" in data.get('error', ''):
                print("✅ Invalid email validation test passed")
            else:
                print(f"❌ Expected 'Invalid email' error, got: {data}")
                return False
        else:
            print(f"❌ Expected status 400 for invalid email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Request failed: {str(e)}")
        return False
    
    return True

def check_mongodb_records():
    """Check if MongoDB records are being created (basic connectivity test)"""
    print("\n=== Checking MongoDB Connectivity ===")
    
    # We'll test this indirectly by making API calls and checking if they succeed
    # since we can't directly access MongoDB from this test script
    print("MongoDB connectivity will be verified through successful API responses")
    print("If APIs return success, it indicates MongoDB is working properly")
    return True

def main():
    """Run all backend tests"""
    print("🚀 Starting Tofabza Backend API Tests")
    print(f"Base URL: {BASE_URL}")
    print(f"API Base: {API_BASE}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    
    results = {
        'create_order': False,
        'verify_payment': False,
        'contact': False
    }
    
    # Test all endpoints
    try:
        results['create_order'] = test_create_order()
        results['verify_payment'] = test_verify_payment()
        results['contact'] = test_contact()
        check_mongodb_records()
        
    except Exception as e:
        print(f"\n❌ Test suite failed with error: {str(e)}")
    
    # Summary
    print("\n" + "="*60)
    print("📊 TEST RESULTS SUMMARY")
    print("="*60)
    
    for endpoint, passed in results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{endpoint.replace('_', '-').upper():<20} {status}")
    
    total_passed = sum(results.values())
    total_tests = len(results)
    
    print(f"\nOverall: {total_passed}/{total_tests} endpoints working")
    
    if total_passed == total_tests:
        print("🎉 All backend API endpoints are working correctly!")
        return True
    else:
        print("⚠️  Some backend API endpoints have issues")
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)