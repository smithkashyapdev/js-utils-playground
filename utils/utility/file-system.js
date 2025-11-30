class FileSystem {
  directory = {'root': {}};
  currentDir = this.directory['root'];
  currentDirPath = 'root';

  createDirectory(name) {
    this.currentDir[name] = {};
    this.currentDirPath = this.currentDirPath + '/' + name;
  }

  changeDirectory(path) {
    const parts = path.split('/');
    let dir = this.directory['root'];
    let newPath = 'root';
    for (const part of parts) {
      if (part in dir) {
        dir = dir[part];
        newPath += '/' + part;
      } else {
        throw new Error(`Directory ${part} does not exist`);
      }
    }
    this.currentDir = dir;
    this.currentDirPath = newPath;
  }

  addFile(fileName) {
    this.currentDir[fileName] = 'file content';
    console.log(this.currentDir);
  }

  deleteFile(fileName) {
    delete this.currentDir[fileName];
  }

  deleteDirectory(name) {
    delete this.currentDir[name];
  }

  getRootDirectory() {
    return this.directory['root'];
  }

  getCurrentDirectory() {
    return this.currentDir;
  }

  getCurrentDirectoryPath() {
    return this.currentDirPath;
  }



}