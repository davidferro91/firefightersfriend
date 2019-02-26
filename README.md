# Firefighter's Friend

Terrell Payne, Jeffrey Miller, Nick Yopko, David Ferro

https://firefightersfriend.herokuapp.com/

[Google Slides Presentation](https://docs.google.com/presentation/d/13ubmLKpQ19rmonPIy814ewu_eDHhyJ8k0EBQ4y0u258/edit#slide=id.p)

![Screenshot of Firefighter's Friend Application](/public/images/screenshot.png)

## Description

This is a web-based application that provides a queryable database for firehouse management information. 

## Motivation

With the vast number of certifications each firefighter has, plus the enormous amount of equipment each firehouse holds and utilizes, there needed to be an easily-readable way to manage it.

## Design Process

Researched processes of fire station management and designed the models that would be used.
Built models for personnel, equipment, certifications, trucks, locations, and the master log to have a record of creates, updates, and deletes.
Designed the page layouts as well as the connections/ flow of the website.
Built the api routes for posts (creates), gets (reads), puts (updates) and deletes (destroys).
Built the html routes with handlebars to display the data on the pages.

## Team Efforts

The whole group developed the concept and design.
Jeff and David built the back-end.
Terrell and Nick built the front-end.

## Technology

The basics - HTML, CSS, JavaScript, jQuery, Node.js, Express.js, Sequelize, Handlebars, Mocha/Chai
New technology - SASS

## Challenges

Sequelize join problems
But we were able to get the foreign keys to work somewhat with certifications and personnel
Variable names in our .env file conflicted with Mac OS environment variables
Some relative file path issues
Some JavaScript placement issues

## Future Improvements

Implementing the truck model
Implementing the location model
User authentication along with permission levels
Alerts for when certifications are 30 days from expiring
Adding more detail to the equipment model with more subfields
More data-input validation
Integration with front-end code of the masterlog as a feature for the higher permission-levels/ administrators

