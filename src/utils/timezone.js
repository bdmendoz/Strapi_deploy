module.exports = {
  dateToColombianZone: () => {
    const date = new Date().toLocaleString().split(',');
    let dateCut =date[0].replace(/\//g ,'-').padStart(10 , '0')
    console.log(dateCut+"intento fecha");
    const colombianDate=new Date(dateCut).toISOString();
    let colD=colombianDate.substring(0,10);
    console.log(colD+"intento fecha 2");
    return colD;
  },
};
