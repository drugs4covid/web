# Drugs4Covid Web
This repository contains the source code of the web application deployed at [Drugs4Covid](https://drugs4covid.oeg.fi.upm.es/)

## Description
[Drugs4Covid](https://drugs4covid.oeg.fi.upm.es/) is a web application made for people who want to find information about
medical entities related to coronaviruses (such us genes, drugs, diseases) without having to search among all the documents 
about such matters.

We have gathered all of those papers/documents/articles and processed them to generate a Knowledge Graph, and various 
services so users can make complex searches and access the knowledge contain on those resources without having to read them.

## Development Installation
### Dependencies

* npm 7.5.2

### Installation

```
git clone https://github.com/drugs4covid/web.git      
```
```
cd web/
```
```
npm install
```

After installing all the dependencies, you can run the application in localhost just by typing the following command
```
npm run serve
```

## Authors
- [@cbadenes](https://github.com/cbadenes): supervision, testing and deployment
- [@vitoriox](https://github.com/Vitoriox): design and implementation

## Contributing

If you find problems or if you wish to add new features, please let us know by opening an [issue](https://github.com/drugs4covid/web/issues) or submitting a pull request.
