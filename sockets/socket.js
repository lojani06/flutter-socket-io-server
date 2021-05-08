const {io}= require('../index');

//mensaje
io.on('connection', client => {
    console.log('cliente conectado');
    client.on('disconnect', () => { 
        console.log('cliente desconetado');
    });


    client.on('mensaje',(data)=>{
       console.log(data)
       io.emit('mensaje',{admin:'nueva reunion'})
    });
  });
