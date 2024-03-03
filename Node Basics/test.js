const obj = {
  getThisGetter() {
    const getter = () => this;
    // function gettter() {
    //   return this;
    // }
    return getter;
  },
};
const fn = obj.getThisGetter();
console.log(fn() === obj); // true
