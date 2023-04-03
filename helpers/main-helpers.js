var db =require('../config/connection')
var collection=require('../config/collections')



module.exports={
   workoutEntry:(data)=>{
    let db=null
    return new Promise(async(resolve,reject)=>{
        console.log( parseInt(data.workout));
         let a=1

        if(parseInt(data.workout)==a)
        // |data.workout==='Machine lower'||data.workout==='Bench press'||data.workout==='Dumbbell pullover'||data.workout==='Inclined Dumbbell fly'||data.workout==='Inclined Dumbbell pullover ')
         {
                db=collection.CHEST_WORKOUT
        }
        // else if(data.workout==''||data.workout=='')
        // {
        //     db=collection.BICEPES_WORKOUT
        // }
        // else if(data.workout==''||data.workout=='')
        // {
            
        // }
        // else if(data.workout==''||data.workout=='')
        // {
        //     db=collection.TRICEPES_WORKOUT
        // }
        // else if(data.workout==''||data.workout=='')
        // {
        //     db=collection.SHOULDER_WORKOUT
        // }
        // else if(data.workout==''||data.workout=='')
        // {
        //     db=collection.LEG_WORKOUT
        // }
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
        await db.get().collection(db).insertOne(obj).then((res)=>
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