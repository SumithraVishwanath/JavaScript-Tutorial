var obj1 = {
    counter :0
};
Object.defineProperty(obj1, "add",{
    set : function(value){
        this.counter+=value;
    }
});
Object.defineProperty(obj1, "sub",{
    set : function(value){
        this.counter-=value;
    }
});
Object.defineProperty(obj1, "mul",{
    set : function(value){
        this.counter*=value;
    }
});
Object.defineProperty(obj1, "div",{
    set : function(value){
        this.counter/=value;
    }
});
Object.defineProperty(obj1, "incre",{
    get : function(){
        this.counter++;
    }
});
Object.defineProperty(obj1, "decre",{
    get : function(){
        this.counter--;
    }
})
Object.defineProperty(obj1, "reset",{
    get : function() {
        this.counter =0;
    }
})

document.getElementById("h1").innerHTML=obj1.counter;
function add() {
    obj1.add = parseInt(document.getElementById("i1").value);
    document.getElementById("h1").innerHTML=obj1.counter;
}
function sub() {
    obj1.sub = document.getElementById("i2").value;
    document.getElementById("h1").innerHTML=obj1.counter;
}
function mul() {
    obj1.mul = document.getElementById("i3").value;
    document.getElementById("h1").innerHTML=obj1.counter;
}
function div() {
    obj1.div = document.getElementById("i4").value;
    document.getElementById("h1").innerHTML=obj1.counter;
}
function incre(){
    obj1.incre;
    document.getElementById("h1").innerHTML=obj1.counter;
}
function decre(){
    obj1.decre;
    document.getElementById("h1").innerHTML=obj1.counter;
}
function reset() {
    obj1.reset
    document.getElementById("h1").innerHTML=obj1.counter;
}
