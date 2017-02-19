"use strict";

module.exports = {
    name: 'API',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    url: process.env.BASE_URL || 'https://localhost:8080'
}