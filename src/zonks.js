function configStyle (domObj, styleObj) {
    for (const property in styleObj) {
        domObj.style.setProperty(property, styleObj[property]);
    }
}

export { 
    configStyle 
};