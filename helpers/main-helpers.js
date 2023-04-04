var db =require('../config/connection')
var collection=require('../config/collections')



module.exports={
   workoutEntry:(data)=>{
    let dbLocation
    return new Promise(async(resolve,reject)=>{
        console.log(data.workout);


        if(data.workout==='Machinenormal'||data.workout==='Machinesplit'||data.workout==='Machinelower'||data.workout==='Benchpress'||data.workout==='Dumbbellpullover'||data.workout==='InclinedDumbbellfly'||data.workout==='InclinedDumbbellpullover ')
        {
            dbLocation=collection.CHEST_WORKOUT
        }
        else if(data.workout=='Machine'||data.workout=='Cable'||data.workout=='hammer'||data.workout=='Dumbbellcurl'||data.workout=='Concentrationcurl'||data.workout=='Barbellcurl')
        {
            dbLocation=collection.BICEPES_WORKOUT
        }
        else if(data.workout=='Dumbbellrows'||data.workout=='Machinerow'||data.workout=='Widegrippull'||data.workout=='Closegrippull'||data.workout=='Deadlift')
        {
            dbLocation=collection.BACK_WORKOUT
        }
        else if(data.workout==''||data.workout==''||data.workout=='')
        {
            dbLocation=collection.TRICEPES_WORKOUT
        }
        else if(data.workout==''||data.workout=='')
        {
            dbLocation=collection.SHOULDER_WORKOUT
        }
        else if(data.workout==''||data.workout=='')
        {
            dbLocation=collection.LEG_WORKOUT
        }
        else
        {
            console.log("Invalid Input to the db variable in main-helper function");
        }


        const date = new Date();
        let obj={
            workout:data.workout,
            set:data.set,
            rep:data.rep,
            time:date
        }
        await db.get().collection(dbLocation).insertOne(obj).then((res)=>
        {

            console.log(res);
            resolve(res)
        })
    })


   }
,
protineEntry:(data)=>{
    return new Promise(async(resolve,reject)=>{
        const date = new Date();
        let obj={
          protine:parseInt(data),
          
          time:date
        }
        await db.get().collection(collection.PROTINE).insertOne(obj).then((res)=>
        {

            console.log(res);
            resolve(res)
        })
    })


   }
   

}