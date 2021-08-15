(self.webpackChunkcovin_kims_app=self.webpackChunkcovin_kims_app||[]).push([[7328],{7328:(t,e,i)=>{"use strict";i.r(e),i.d(e,{FilesystemWeb:()=>s});var r=i(5310);class s extends r.Uw{constructor(){super(...arguments),this.DB_VERSION=1,this.DB_NAME="Disc",this._writeCmds=["add","put","delete"]}async initDb(){if(void 0!==this._db)return this._db;if(!("indexedDB"in window))throw this.unavailable("This browser doesn't support IndexedDB");return new Promise((t,e)=>{const i=indexedDB.open(this.DB_NAME,this.DB_VERSION);i.onupgradeneeded=s.doUpgrade,i.onsuccess=()=>{this._db=i.result,t(i.result)},i.onerror=()=>e(i.error),i.onblocked=()=>{console.warn("db blocked")}})}static doUpgrade(t){const e=t.target.result;switch(t.oldVersion){case 0:case 1:default:e.objectStoreNames.contains("FileStorage")&&e.deleteObjectStore("FileStorage"),e.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}async dbRequest(t,e){const i=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly";return this.initDb().then(r=>new Promise((s,o)=>{const a=r.transaction(["FileStorage"],i).objectStore("FileStorage")[t](...e);a.onsuccess=()=>s(a.result),a.onerror=()=>o(a.error)}))}async dbIndexRequest(t,e,i){const r=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly";return this.initDb().then(s=>new Promise((o,a)=>{const n=s.transaction(["FileStorage"],r).objectStore("FileStorage").index(t)[e](...i);n.onsuccess=()=>o(n.result),n.onerror=()=>a(n.error)}))}getPath(t,e){const i=void 0!==e?e.replace(/^[/]+|[/]+$/g,""):"";let r="";return void 0!==t&&(r+="/"+t),""!==e&&(r+="/"+i),r}async clear(){(await this.initDb()).transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear()}async readFile(t){const e=this.getPath(t.directory,t.path),i=await this.dbRequest("get",[e]);if(void 0===i)throw Error("File does not exist.");return{data:i.content?i.content:""}}async writeFile(t){const e=this.getPath(t.directory,t.path),i=t.data,r=t.recursive,s=await this.dbRequest("get",[e]);if(s&&"directory"===s.type)throw"The supplied path is a directory.";const o=t.encoding,a=e.substr(0,e.lastIndexOf("/"));if(void 0===await this.dbRequest("get",[a])){const e=a.indexOf("/",1);if(-1!==e){const i=a.substr(e);await this.mkdir({path:i,directory:t.directory,recursive:r})}}const n=Date.now(),d={path:e,folder:a,type:"file",size:i.length,ctime:n,mtime:n,content:!o&&i.indexOf(",")>=0?i.split(",")[1]:i};return await this.dbRequest("put",[d]),{uri:d.path}}async appendFile(t){const e=this.getPath(t.directory,t.path);let i=t.data;const r=e.substr(0,e.lastIndexOf("/")),s=Date.now();let o=s;const a=await this.dbRequest("get",[e]);if(a&&"directory"===a.type)throw"The supplied path is a directory.";if(void 0===await this.dbRequest("get",[r])){const e=r.indexOf("/",1);if(-1!==e){const i=r.substr(e);await this.mkdir({path:i,directory:t.directory,recursive:!0})}}void 0!==a&&(i=a.content+i,o=a.ctime);const n={path:e,folder:r,type:"file",size:i.length,ctime:o,mtime:s,content:i};await this.dbRequest("put",[n])}async deleteFile(t){const e=this.getPath(t.directory,t.path);if(void 0===await this.dbRequest("get",[e]))throw Error("File does not exist.");if(0!==(await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)])).length)throw Error("Folder is not empty.");await this.dbRequest("delete",[e])}async mkdir(t){const e=this.getPath(t.directory,t.path),i=t.recursive,r=e.substr(0,e.lastIndexOf("/")),s=(e.match(/\//g)||[]).length,o=await this.dbRequest("get",[r]),a=await this.dbRequest("get",[e]);if(1===s)throw Error("Cannot create Root directory");if(void 0!==a)throw Error("Current directory does already exist.");if(!i&&2!==s&&void 0===o)throw Error("Parent directory must exist");if(i&&2!==s&&void 0===o){const e=r.substr(r.indexOf("/",1));await this.mkdir({path:e,directory:t.directory,recursive:i})}const n=Date.now(),d={path:e,folder:r,type:"directory",size:0,ctime:n,mtime:n};await this.dbRequest("put",[d])}async rmdir(t){const{path:e,directory:i,recursive:r}=t,s=this.getPath(i,e),o=await this.dbRequest("get",[s]);if(void 0===o)throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");const a=await this.readdir({path:e,directory:i});if(0!==a.files.length&&!r)throw Error("Folder is not empty");for(const n of a.files){const t=`${e}/${n}`;"file"===(await this.stat({path:t,directory:i})).type?await this.deleteFile({path:t,directory:i}):await this.rmdir({path:t,directory:i,recursive:r})}await this.dbRequest("delete",[s])}async readdir(t){const e=this.getPath(t.directory,t.path),i=await this.dbRequest("get",[e]);if(""!==t.path&&void 0===i)throw Error("Folder does not exist.");return{files:(await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(e)])).map(t=>t.substring(e.length+1))}}async getUri(t){const e=this.getPath(t.directory,t.path);let i=await this.dbRequest("get",[e]);return void 0===i&&(i=await this.dbRequest("get",[e+"/"])),{uri:(null==i?void 0:i.path)||e}}async stat(t){const e=this.getPath(t.directory,t.path);let i=await this.dbRequest("get",[e]);if(void 0===i&&(i=await this.dbRequest("get",[e+"/"])),void 0===i)throw Error("Entry does not exist.");return{type:i.type,size:i.size,ctime:i.ctime,mtime:i.mtime,uri:i.path}}async rename(t){return this._copy(t,!0)}async copy(t){return this._copy(t,!1)}async requestPermissions(){return{publicStorage:"granted"}}async checkPermissions(){return{publicStorage:"granted"}}async _copy(t,e=!1){let{toDirectory:i}=t;const{to:r,from:s,directory:o}=t;if(!r||!s)throw Error("Both to and from must be provided");i||(i=o);const a=this.getPath(o,s),n=this.getPath(i,r);if(a===n)return;if(n.startsWith(a))throw Error("To path cannot contain the from path");let d;try{d=await this.stat({path:r,directory:i})}catch(l){const t=r.split("/");t.pop();const e=t.join("/");if(t.length>0&&"directory"!==(await this.stat({path:e,directory:i})).type)throw new Error("Parent directory of the to path is a file")}if(d&&"directory"===d.type)throw new Error("Cannot overwrite a directory with a file");const c=await this.stat({path:s,directory:o}),h=async(t,e,r)=>{const s=this.getPath(i,t),o=await this.dbRequest("get",[s]);o.ctime=e,o.mtime=r,await this.dbRequest("put",[o])},y=c.ctime?c.ctime:Date.now();switch(c.type){case"file":{const t=await this.readFile({path:s,directory:o});return e&&await this.deleteFile({path:s,directory:o}),await this.writeFile({path:r,directory:i,data:t.data}),void(e&&await h(r,y,c.mtime))}case"directory":{if(d)throw Error("Cannot move a directory over an existing object");try{await this.mkdir({path:r,directory:i,recursive:!1}),e&&await h(r,y,c.mtime)}catch(l){}const t=(await this.readdir({path:s,directory:o})).files;for(const a of t)await this._copy({from:`${s}/${a}`,to:`${r}/${a}`,directory:o,toDirectory:i},e);e&&await this.rmdir({path:s,directory:o})}}}}s._debug=!0}}]);