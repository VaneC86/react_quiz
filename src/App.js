import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/quiz/quiz'
import quizList from './containers/quiz_list/quiz_list'
import auth from './containers/auth/auth'
import quiz_creator from './containers/quiz-creator/quiz-creator'

import {Route,Switch} from 'react-router-dom'

class App extends Component {
  render (){
    return(
      <Layout>
        <Switch>
          <Route path='/auth' component={auth}/>
          <Route path='/quiz-creator/' component={quiz_creator}/>
          <Route path='/quiz/:id' component={Quiz}/>
          <Route path='/' component={quizList}/>
        </Switch>
      </Layout>
    )
  };
}

export default App;
