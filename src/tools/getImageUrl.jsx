function getImageUrl() {
    const imgImports = import.meta.globEager("/images/*");
    return imgImports;
}

export default getImageUrl;
