const winston = require('winston')


const levelsOption = {
    levels:{
    fatal:0,
    error:1,
    warning:2,
    info:3,
    http:4,
    debug:5
    },
    colors:{
        fatal:'black',
        error:'red',
        warnig:'yellow',
        info:'magenta',
        http:'white'
    }
    
}

const logger = winston.createLogger({
    levels:levelsOption.levels,


    transports:[

        new winston.transports.Console({
            level:'debug',
            format: 
                winston.format.combine(
                winston.format.colorize({colors:levelsOption.colors}),
                winston.format.simple()
              
            )
    }),

        // new winston.transports.Console({level:'info'}),
        
        new winston.transports.File({
            level:'error',
            filename:'./Logs/errors.log',
            format: winston.format.simple()
        })

    ]


})

const addLogger = (req,res,next)=>{
    req.logger = logger;
   req.logger.debug('Test ')
   next()

}

module.exports = {
    addLogger
}