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
        else if(data.workout=='bicepesMachine'||data.workout=='bicepesCable'||data.workout=='hammer'||data.workout=='Dumbbellcurl'||data.workout=='Concentrationcurl'||data.workout=='Barbellcurl')
        {
            dbLocation=collection.BICEPES_WORKOUT
        }
        else if(data.workout=='Dumbbellrows'||data.workout=='Machinerow'||data.workout=='Widegrippull'||data.workout=='Closegrippull'||data.workout=='Deadlift')
        {
            dbLocation=collection.BACK_WORKOUT
        }
        else if(data.workout=='tricepesCable'||data.workout=='Dumbbellextension'||data.workout=='Situp')
        {
            dbLocation=collection.TRICEPES_WORKOUT
        }
        else if(data.workout=='Dumbbellpress'||data.workout=='Lateralraise'||data.workout=='Sidecable'||data.workout=='shoulderBar'||data.workout=='shouldermachine')
        {
            dbLocation=collection.SHOULDER_WORKOUT
        }
        else if(data.workout=='legDumbbell'||data.workoutdata.workout=='Machineextension'||data.workout=='Machinepull'||data.workout=='Squats'||data.workout=='legBar')
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
            set:parseInt(data.set),
            rep:parseInt(data.rep),
            vol:parseInt(data.set)*parseInt(data.rep),
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


   },

   getAllData:(muscleGroup)=>{
    return new Promise(async(resolve,reject)=>{
        let dbLocation
        if(muscleGroup==='chest')
        {
            dbLocation=collection.CHEST_WORKOUT
        }
        else if(muscleGroup==='bicepes')
        {
            dbLocation=collection.BICEPES_WORKOUT
        }
        else if(muscleGroup==='back')
        {
            dbLocation=collection.BACK_WORKOUT
        }
        else if(muscleGroup==='tricepes')
        {
            dbLocation=collection.TRICEPES_WORKOUT
        }
        else if(muscleGroup==='shoulder')
        {
            dbLocation=collection.SHOULDER_WORKOUT
        }
        else if(muscleGroup==='leg')
        {
            dbLocation=collection.LEG_WORKOUT
        }
        else
        {
            console.log("Invalid input to function");
        }
    
        await db.get().collection(dbLocation).find().toArray().then((res)=>
        {

            console.log(`Data fetched for ${muscleGroup} muscle`);
            resolve(res)
        })
    })


   }
   

}