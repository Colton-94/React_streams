import React from 'react';
import {connect} from 'react-redux';

import {signIn} from '../actions';
import {signOut} from '../actions';

class Google extends React.Component{
  //  state= { isSigned : null };

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:
                            '455261110954-1p8pj45c8rv6ghjhbuj8i156oars9bh6.apps.googleusercontent.com',
                scope:'email'

            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
               // this.setState ({ isSigned: this.auth.isSignedIn.get() })
               this.onAuthChange(this.auth.isSignedIn.get());//calling onAuthChange with arg called isSignedIn which is boolean value 
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
            
        });
    }
    onAuthChange=(isSignedIn)=>{
       // this.setState ({ isSigned: this.auth.isSignedIn.get() })
       if(isSignedIn){
           this.props.signIn(this.auth.currentUser.get().getId()); 
          // console.log(this.auth.currentUser.get().getId());
       }
       else
       this.props.signOut();
    };
    sign(){
        if(this.props.isSigned===null){
            return null;
        }
        else if(this.props.isSigned){
            return(<div>
                 <button onClick={()=>this.signOutClick} className="ui red google button">
                    <i className="google icon " />
                    SignOut
                </button>
            </div>);
        }
        else{
            return(<div> 
                <button onClick={()=>this.signInClick} className="ui green google button">
                    <i className="google icon" />
                    SignIn

                </button>
            </div>);
        }
    }
    signOutClick=()=>{
        this.auth.signOut();
        //refering to instance of auth obj to do signIN
    };
    signInClick=()=>{
        this.auth.signIn();
    };
    render(){
     //   console.log(this.props.isSigned);
    return (<div>{this.sign()}</div>);
    }
}
const mapStateToProps=(state)=>{
    return {isSigned : state.auth.isSignedIn};
};

export default connect(mapStateToProps,{signIn,signOut})(Google);