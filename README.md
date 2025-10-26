# Source Finder

Live demo: https://tteothegod.github.io/sourcefinder/

Source Finder is a React frontend that helps individuals find academic sources by letting users enter a query and recieve scraped academic sources from "wikipedia.com". The scraping and API logic live in a separate repository: https://github.com/tteothegod/sourcefinder-api

## Key ideas
- Frontend (this repo): React app that provides the UI for searching, viewing results, and filtering candidate academic sources.
- Scraper (sourcefinder-api): Python code that retrieves HTML from target pages then uses custom parser classes to find academic sources (citations, DOIs, metadata).
- Neural network & API: A neural model is currently being trained to improve source ranking/categorization. An API is being built to serve the model and the scrapers; when complete, searches from the frontend will query that API.

## Status
- Frontend: UI and basic search flow implemented (this repo).
- Scraper: Python scraping classes implemented in sourcefinder-api (see repo).
- Neural network: training in progress.
- API: under development — will provide search endpoints, ranking, and inference for the trained model.

## How it works
- Frontend will send search queries to API
- Scraper fetches the page HTML, uses parser classes to identify citation elements. Parser classes also filer out unacademic sources such as articles, basic webpages, and pages without .edu, .gov, etc. Once the neural network is fully trained, it will rank and return higher-quality results.
- Once the API is completed, candidate sources are returned to the frontend. 

## API / Scraper repo
All scraping code and the upcoming API live in:
https://github.com/tteothegod/sourcefinder-api

Visit that repo for:
- Python scraping classes and parsers
- Instructions to run the scraper locally
- API spec (endpoints) and examples (coming soon)

## Contact
Author: tteothegod
- Email: matteogodinez2024@gmail.com
