#!/usr/bin/env python3
"""
MongoDB verification script for Tofabza
"""

import os
import sys
sys.path.append('/app')

from pymongo import MongoClient
from datetime import datetime

def check_mongodb():
    """Check MongoDB collections and recent records"""
    try:
        # Connect to MongoDB
        mongo_url = "mongodb://localhost:27017"
        db_name = "tk_digital_solutions"
        
        client = MongoClient(mongo_url)
        db = client[db_name]
        
        print("🔍 Checking MongoDB Collections...")
        print(f"Database: {db_name}")
        print(f"Connection: {mongo_url}")
        
        # Check orders collection
        orders_collection = db.orders
        orders_count = orders_collection.count_documents({})
        print(f"\n📦 Orders Collection: {orders_count} documents")
        
        if orders_count > 0:
            latest_order = orders_collection.find_one({}, sort=[('created_at', -1)])
            print(f"Latest order ID: {latest_order.get('id', 'N/A')}")
            print(f"Razorpay Order ID: {latest_order.get('razorpay_order_id', 'N/A')}")
            print(f"Amount: {latest_order.get('amount', 'N/A')}")
            print(f"Status: {latest_order.get('status', 'N/A')}")
            print(f"Mock: {latest_order.get('mock', 'N/A')}")
            print(f"Created: {latest_order.get('created_at', 'N/A')}")
        
        # Check contacts collection
        contacts_collection = db.contacts
        contacts_count = contacts_collection.count_documents({})
        print(f"\n📧 Contacts Collection: {contacts_count} documents")
        
        if contacts_count > 0:
            latest_contact = contacts_collection.find_one({}, sort=[('created_at', -1)])
            print(f"Latest contact ID: {latest_contact.get('id', 'N/A')}")
            print(f"Name: {latest_contact.get('name', 'N/A')}")
            print(f"Email: {latest_contact.get('email', 'N/A')}")
            print(f"Service: {latest_contact.get('service', 'N/A')}")
            print(f"Created: {latest_contact.get('created_at', 'N/A')}")
        
        client.close()
        
        if orders_count > 0 and contacts_count > 0:
            print("\n✅ MongoDB verification successful - both collections have records")
            return True
        elif orders_count > 0 or contacts_count > 0:
            print("\n⚠️  MongoDB partially working - some collections have records")
            return True
        else:
            print("\n❌ MongoDB collections are empty - no records found")
            return False
            
    except Exception as e:
        print(f"\n❌ MongoDB connection failed: {str(e)}")
        return False

if __name__ == "__main__":
    success = check_mongodb()
    exit(0 if success else 1)