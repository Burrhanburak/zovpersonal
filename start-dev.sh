#!/bin/bash

echo "🚀 Starting VisaConsult Development Server..."
echo "================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🌍 Geo-location features:"
echo "- Turkish IP simulation in development"
echo "- Auto-redirect based on Accept-Language header"
echo "- /tr - Türkçe"
echo "- /en - English"  
echo "- /de - Deutsch"
echo ""

echo "🔧 Debug URLs:"
echo "- /api/geo - Geo detection API"
echo "- /tr/test - Turkish translation test"
echo "- /en/test - English translation test"
echo "- /de/test - German translation test"
echo ""

echo "🔍 Debug panel will appear in bottom-right corner"
echo "================================="

# Start development server
npm run dev
