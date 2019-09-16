# Angular Component Library

## Install Notes

Clone the the repository, inside there are two projects. The component library and a seperate Angular project as a library test application.run:  `npm install` to install dependancies.

### Library Tester Application
This application can be served straight out of the box. `ng serve` and test out the library/

### Library

Typically it is best to start with one of many tutorials on how to create your Angular library. To use this library you have to setup a couple of things.

more on this later
<!-- ## .npmrc
add .npmrc file to your root to publish your library to NPM or a local repository (eg. Sonatype Nexus Repository);

## publish configuration
Add a publish configuration into package.json. Referencing where you want to publish (NPM, Nexus, etc);
```
"publishConfig": {
    "registry": ""
}
``` -->

## Docker
Sample dockerfile to install and publish your library, can be used in your pipeline.