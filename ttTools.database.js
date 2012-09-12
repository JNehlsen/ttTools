ttTools.database = {

  dbName        : 'ttTools.database',
  dbDisplayName : 'ttTools Database',
  dbVersion     : '1.0',
  dbMaxSize     : 10000000,
  dbHandle      : false,

  isSupported : function () {
    return window.openDatabase ? true : false;
  },

  getDatabase : function () {
  	try {
    if (this.dbHandle) { return this.dbHandle; }
    this.dbHandle = openDatabase(this.dbName, this.dbVersion, this.dbDisplayName, this.dbMaxSize);
    } catch(e) {
    	if (e == 2) {
          alert("Invalid database version.");
      } else {
          alert("Unknown error "+e+".");
      }
    }
    return this.dbHandle;
  },

  execute : function (query, success, failure) {
    console.log(query);
    this.getDatabase().transaction(  
      function (transaction) {
        transaction.executeSql(query, [], success, failure);
      }
    );
  }
}
