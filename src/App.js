import React, { Component } from "react";
import "./App.scss";
import Auth from "@aws-amplify/auth";
import awsmobile from "./aws-exports";
import API, { graphqlOperation } from "@aws-amplify/api";

import Amplify from "aws-amplify";
Amplify.configure(awsmobile);

API.configure(awsmobile);

// retrieve temporary AWS credentials and sign requests
Auth.configure(awsmobile);

const listOpportunity = `query opportunity {
  opportunity {
    items{
      id
      name
      description
    }
  }
}`;

const addOpportunity = `mutation createOpportunity($name:String! $description: String!) {
  createOpportunity(input: {
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`;

class App extends Component {
    todoMutation = async () => {
        const todoDetails = {
            name: "New opp",
            description: "testing..."
        };

        const newEvent = await API.graphql(
            graphqlOperation(addOpportunity, todoDetails)
        );
        alert(JSON.stringify(newEvent));
    };

    listQuery = async () => {
        console.log("listing opp");
        const allTodos = await API.graphql(graphqlOperation(listOpportunity));
        alert(JSON.stringify(allTodos));
    };

    render() {
        return (
            <div className="App">
                <div className="App-intro">
                    <button onClick={this.listQuery}> GraphQL Query </button>
                    <button onClick={this.todoMutation}>
                        {" "}
                        GraphQL Mutation{" "}
                    </button>
                </div>
            </div>
        );
    }
}

window.LOG_LEVEL = "DEBUG";

export default App;
