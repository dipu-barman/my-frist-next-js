This is a Next.js based e-commerce app where users can browse products, view details, search, filter, and sort items. Authentication is implemented with Google login.


# Clone the repository
git clone https://github.com/username/project-name.git

# Go into the project directory
cd project-name

# Install dependencies
npm install

# Create a .env.local file and add environment variables
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret

# Run the development server
npm run dev
/                → Home Page  
/products        → All Products Page  
/products/[id]  → Single Product Details  
/login          → Login Page (Google Auth)  
/dashboard      → User Dashboard (Protected)  
/admin          → Admin Dashboard (Protected)  
