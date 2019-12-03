import React, {Component} from "react";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyForm: false,
      dataForm: false
    }
 }
 handleSubmit = (e) => {
e.preventDefault();
  const formData = {};
    for (const data in this.refs) {
      formData[data] = this.refs[data].value;
    }
  console.log(formData);

}

  componentDidMount = () => {

    this.setState({ dj: this.props.d });

    let formData = this.props.d.data;
    if (this.props.match.params.formid) {
      this.loadForm(this.props.match.params.formid, formData);
    }
    else {
      this.setState({ emptyForm: true, dataForm: false })
    }


    this.unlisten = this.props.history.listen((location, action) => {
      if (this.props.match.params.formid) {
        this.loadForm(this.props.match.params.formid, formData);
      } else {
        this.setState({ emptyForm: true, dataForm: false })
      }
    });

  }

  loadForm = (id,formData) => {
  Object.keys(formData).every(res =>{
     if(formData[res]["id"] === parseInt(id))
     {
       this.setState({emptyForm:false,dataForm:true, formD: formData[res]});
       return false;
     }else{
      return true;
     }
    })
    
  }


  render(){

    let formE, formD;
    if(this.state.dj)
    {
      formE = this.state.dj.colums;
    
    }

    if(this.state.formD)
    {
      formD = this.state.formD;
    }
    return(
      
      <div className="container index-page text-left">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <h1 className="text-center my-5">
                React Dynamic form
            </h1>
         

        
          </div>
        </div>
        {this.state.emptyForm ?(
          <form onSubmit={this.handleSubmit}>
            {
              formE.map(id => {
                return (
                  <div key={id} >
                          <label htmlFor={id}>{id}</label>
                    <input type="text" ref={id} className="form-control" onChange={this.updateState} id={id} placeholder= {"Please enter your "+ id}></input>
                  </div>
                )
              })
            }

            <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form> ) : ''
        }


        {this.state.dataForm ? (
          <form onSubmit={this.handleSubmit}>
            {
              Object.keys(formD).map(id => {
                return (
                  <div key={id} className="mb-2">
                    <label htmlFor={id}>{id}</label>
                    <input type="text" ref={id} className="form-control" onChange={this.updateState} id={id} defaultValue={formD[id]}/>
                  </div>
                )
              })
            }

            <button type="submit" className="btn btn-primary">SUBMIT</button>
          </form>) : ''
        }

    </div>
    )

  }

 
  
 
};

export default DynamicForm;