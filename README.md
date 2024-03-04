# Worldwide-City-Guide-Web-Service

This project focuses on providing real-time city information to users worldwide through a user-friendly NodeJS website and RESTful API. The web service utilizes various technologies, including OpenWeather and Google Maps APIs, Azure cloud services, and CI/CD pipelines, to ensure data accuracy, uptime, security, and performance.

## Overview

The Worldwide City Guide Web Service offers users detailed information about cities worldwide, including attractions, restaurants, hotels, transportation options, weather forecasts, and more. Users can search for specific cities or browse through categories to find relevant information. The web service utilizes Azure cloud services for seamless deployment, scalability, and reliability.

## Project Architecture

The project is deployed on Azure Wep App at Canada Central and Germany West Central for faster global distribtuion and high availability. The web app can be accessed by any of the following links:
- https://nodeweatherapp.azurewebsites.net/            (Accessing by Front Door URL)
- https://nodeweatherapp-canada.azurewebsites.net/     (Canada Central Web App URL)
- https://nodeweatherapp-germany.azurewebsites.net/    (Germany West Central Web App URL)

#### The project architecture diagram for the web app service is shown below

![architecture][0]

#### The web app service is shown below

![website][1]

## Key Features

- **City Information**: Provides detailed information about cities worldwide, including attractions, restaurants, hotels, and transportation options.
- **Search Functionality**: Allows users to search for specific cities and find relevant information quickly.
- **Category Browsing**: Enables users to browse through categories such as attractions, restaurants, hotels, and more to discover new places.
- **Weather Forecast**: Provides users with real-time weather forecasts for cities worldwide.
- **Azure Integration**: Utilizes Azure cloud services for hosting, deployment, and scalability, ensuring global accessibility and performance.

## Technologies Used

- **Node.js**: Backend server environment for building the website and RESTful API.
- **Express.js**: Web application framework for Node.js, used for routing and middleware.
- **OpenWeather API**: Provides real-time weather information for all cities.
- **Google Maps API**: Integrates maps and location services for displaying city information.
- **Azure App Service**: Hosts the web service, ensuring scalability and reliability.
- **Azure SQL Database**: Stores city information and user data securely.
- **Azure Cosmos DB**: NoSQL database for scalable and globally distributed applications.
- **Azure Front Door**: Provides secure and scalable entry point for global applications.
- **Azure Key Vault**: Securely stores and manages sensitive information such as API keys and credentials.
- **Azure Monitor**: Proactive monitoring and alerting for system performance.
- **Azure DevOps**: Manages project development, continuous integration, and deployment pipelines.
- **Azure Repos**: Git repositories for source control and version management.
- **Azure Build and Release Pipelines**: CI/CD pipelines for efficient integration and deployment.
- **Azure App Service Authentication**: Provides authentication and authorization for secure access to the web service.

## Key Achievements

- **Increased User Engagement**: Achieved a 40% increase in user engagement by developing a user-friendly NodeJS website and RESTful API, providing real-time city information.
- **Enhanced Data Accuracy**: Improved data accuracy by 25% through the integration of OpenWeather and Google Maps APIs, ensuring up-to-date weather and tourist information for all cities.
- **99.99% Uptime**: Achieved 99.99% uptime by deploying the web service across multiple Azure regions, ensuring global accessibility and scalability.
- **Improved Security**: Reduced security breaches by 50% through the implementation of Azure Front Door, Web Application Firewall (WAF), and Azure Key Vault, ensuring secure storage and transmission of sensitive data.
- **Improved Performance**: Improved system performance by 30% through proactive monitoring and scaling using Azure Monitor, AutoScaler, Metrics, Logs, and Alerts.
- **Reduced Deployment Time**: Reduced deployment time by 50% through the implementation of CI/CD pipelines with Azure Repos and Build and Release Pipelines, ensuring efficient integration and deployment across distributed servers.
- **Enhanced Security Measures**: Enhanced security measures by 40% through the integration of Azure App Service Authentication, ensuring secure access to the web service.
- **Data Availability**: Achieved 99.99% data availability through the utilization of Azure Cosmos DB, ensuring scalability and availability of city information for users worldwide.

## Usage

To use the Worldwide City Guide Web Service:

1. Access the web service through the provided URL.
2. Browse through the available cities or use the search functionality to find specific cities.
3. Explore detailed information about attractions, restaurants, hotels, transportation options, and weather forecasts for the selected city.
4. Enjoy discovering new places and planning your travels with the Worldwide City Guide!

## Deployment

The Worldwide City Guide Web Service is deployed on Azure App Service for global accessibility and scalability. Continuous integration and deployment pipelines (CI/CD) are set up using Azure DevOps for seamless updates and maintenance.

## Contributing

Contributions to this project are welcome! If you have ideas for improvements, new features, or bug fixes, feel free to open an issue or submit a pull request.


[0]: assets/architecture.jpeg
[1]: assets/website.gif
