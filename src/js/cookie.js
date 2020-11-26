export function setCookie(cname, cvalue) {
  let d = new Date();
  d.setTime(d.getTime()+(2*24*60*60*1000))
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ';' + expires + "; path=/"
}

export function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

//检查Cookie
export function checkCookie(cname)
{
  var name = getCookie(cname);
  if (name != "")
  {
    return name
  }
  else
  {
    setCookie(cname, JSON.stringify({data: []}))
    return getCookie(cname)
  }
}
