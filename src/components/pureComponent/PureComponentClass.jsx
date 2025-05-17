import { PureComponent } from "react";

class PureComponentClass extends PureComponent{
  

    render(){
  console.log("age..purecomponent render")

        return(
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default PureComponentClass;