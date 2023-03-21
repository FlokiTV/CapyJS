import geckos from "@geckos.io/server";
// https://github.com/geckosio/geckos.io#server-1

export function instance(port=9208){
    const _instance = geckos();
    _instance.listen(port); // default port is 9208
    return _instance
}
