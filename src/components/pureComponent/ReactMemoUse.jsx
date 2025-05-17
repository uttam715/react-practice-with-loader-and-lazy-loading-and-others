export default function ReactMemoUse({name}){
  console.log("..Child render")

    return(
        <div>
            {name.name}
        </div>
    )
}