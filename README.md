# Lucid Link Stock Timer UI

## Summary

Minimalistic UI providing interface for [Lucid Link Stock Timer](https://github.com/nikksan/lucid-link-stock-timer).

## Requirements

* NodeJS v16.10.0 or newer

## Setup

### Install required packages

Execute `npm install`

### Configure local environment variables

- Execute `cp .env.sample .env` in the project root directory

## Usage

* `npm start` - starts the service

## Configuration

Configuration options could be provided by either setting them as environment variables, when the server is run or by putting
them in the `.env` file. Following options are supported:

* `REACT_APP_API_URL` - base url where the api service is running
