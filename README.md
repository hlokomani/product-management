# Product Management App

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/hlokomani/product-management/ci.yaml)
![GitHub last commit](https://img.shields.io/github/last-commit/hlokomani/product-management)
![GitHub forks](https://img.shields.io/github/forks/hlokomani/product-management)

[Live Deployment](https://product-management-2myk5v973-hlokomanis-projects.vercel.app/products)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Contributors](#contributors)


## Introduction

The Product Management App is a simple web application designed to help users manage products efficiently. It provides functionalities to create, read, update, and delete (CRUD) products. The app is built with Next.js, TypeScript, and integrates with a REST API for backend operations.

## Features

- **Product Listing**: View all products with pagination.
- **Product Filtering**: Filter products based on criteria such as name, category, and price.
- **Product Details**: View detailed information about a product.
- **Create Product**: Add new products using a modal form.
- **Update Product**: Edit existing product details.
- **Delete Product**: Remove products from the list.

## Technologies Used

- **Frontend**:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - React
  - shadcn components

- **Backend**:
  - REST API (https://gendacproficiencytest.azurewebsites.net)

- **Testing**:
  - Jest
  - Coveralls Code Coverage

- **Deployment**
  - Vercel

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/product-management.git
   cd product-management
   cd myproductmanager
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

Once the app is running, you can access various features from the web interface:

- **View Products**
- **Create Product**: Click the "Create Product" button to open a modal form and add a new product.
- **Edit Product**: Click on a product to view its details and update its information.
- **Delete Product**: Use the delete button on the product details page to remove a product.

## Running Tests

To run the tests, use the following command:

```bash
npm run test
npm run test-coverage
```

This will execute all the unit tests using Jest and provide test coverage.

## Contributors

### Hlokomani Khondlo

[LinkedIn](https://www.linkedin.com/in/hlokomani/)
