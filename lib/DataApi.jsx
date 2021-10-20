class DataApi {
  constructor(rowData) {
    this.rowData = rowData;
  }
  mapIntObject(arrr) {
    let arr = [].concat(arrr);
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntObject(this.rowData.articles);
  }

  getAuthors() {
    return this.mapIntObject(this.rowData.authors);
  }
}

export default DataApi;
