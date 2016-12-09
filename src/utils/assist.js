/**
 * Created by ty on 2016/10/30.
 */
export function oneOf(value,list) {
    list.some(function (v,i) {
        if(v == value){
            return i;
        }
    });
}