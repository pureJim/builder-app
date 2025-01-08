const blobTypeConf = new Map([
  ['application/x-abiword', '.abw'],
  ['application/x-freearc', '.arc'],
  ['video/x-msvideo', '.avi'],
  ['application/vnd.amazon.ebook', '.azw'],
  ['application/octet-stream', '.bin'],
  ['image/bmp', '.bmp'],
  ['application/x-bzip', '.bz'],
  ['application/x-bzip2', '.bz2'],
  ['application/x-csh', '.csh'],
  ['text/css', '.css'],
  ['text/csv', '.csv'],
  ['application/msword', '.doc'],
  ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.docx'],
  ['application/vnd.ms-fontobject', '.eot'],
  ['application/epub+zip', '.epub'],
  ['image/gif', '.gif'],
  ['text/html', '.html'],
  ['image/vnd.microsoft.icon', '.ico'],
  ['text/calendar', '.ics'],
  ['application/java-archive', '.jar'],
  ['image/jpeg', '.jpeg'],
  ['text/javascript', '.js'],
  ['application/json', '.json'],
  ['application/ld+json', '.jsonld'],
  ['audio/midi audio/x-midi', '.midi'],
  ['text/javascript', '.mjs'],
  ['audio/mpeg', '.mp3'],
  ['video/mpeg', '.mpeg'],
  ['application/vnd.apple.installer+xml', '.mpkg'],
  ['application/vnd.oasis.opendocument.presentation', '.odp'],
  ['application/vnd.oasis.opendocument.spreadsheet', '.ods'],
  ['application/vnd.oasis.opendocument.text', '.odt'],
  ['audio/ogg', '.oga'],
  ['video/ogg', '.ogv'],
  ['application/ogg', '.ogx'],
  ['font/otf', '.otf'],
  ['image/png', '.png'],
  ['application/pdf', '.pdf'],
  ['application/vnd.ms-powerpoint', '.ppt'],
  ['application/vnd.openxmlformats-officedocument.presentationml.presentation', '.pptx'],
  ['application/x-rar-compressed', '.rar'],
  ['application/rtf', '.rtf'],
  ['application/x-sh', '.sh'],
  ['image/svg+xml', '.svg'],
  ['application/x-shockwave-flash', '.swf'],
  ['application/x-tar', '.tar'],
  ['image/tiff', '.tiff'],
  ['font/ttf', '.ttf'],
  ['text/plain', '.txt'],
  ['application/vnd.visio', '.vsd'],
  ['audio/wav', '.wav'],
  ['audio/webm', '.weba'],
  ['video/webm', '.webm'],
  ['image/webp', '.webp'],
  ['font/woff', '.woff'],
  ['font/woff2', '.woff2'],
  ['application/xhtml+xml', '.xhtml'],
  ['application/vnd.ms-excel', '.xls'],
  ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.xlsx'],
  ['application/xml', '.xml'],
  ['text/xml', '.xml'],
  ['application/vnd.mozilla.xul+xml', '.xul'],
  ['application/zip', '.zip'],
  ['audio/3gpp', '.3gp'],
  ['video/3gpp', '.3gp'],
  ['audio/3gpp2', '.3g2'],
  ['video/3gpp2', '.3g2'],
  ['application/x-7z-compressed', '.7z'],
]);

/**
 * res: Blob对象
 * filename: 文件名
 * hasSuffix: 文件名是否带后缀，默认不带后缀
 */
const fileDownload = (res: Blob | File | string, filename: string, hasSuffix?: boolean) => {
  const file = new Blob([res], { type: typeof res === 'string' ? '' : res.type });
  const fileURL = URL.createObjectURL(file);
  let suffix = '';
  if (!hasSuffix) {
    suffix = blobTypeConf.get(typeof res === 'string' ? '' : res.type) || '';
  }

  const tempDownloadButton = document.createElement('a');
  tempDownloadButton.style.display = 'none';
  tempDownloadButton.href = fileURL;
  tempDownloadButton.setAttribute('download', `${filename}${suffix}`);

  tempDownloadButton.click();

  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(fileURL);
  }, 100);
};

export default fileDownload;
