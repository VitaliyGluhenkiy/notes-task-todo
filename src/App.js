import { AppProvider, Header, WorkSpace, Sidebar } from './components'

import './App.scss'

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Header />
                <div className="main">
                    <Sidebar />
                    <WorkSpace />
                </div>
            </div>
        </AppProvider>
    )
}

export default App
