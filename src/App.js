import BarChart from './BarChart'

const App = () => {
    return (<BarChart 
        id='myCharts'
        data={[12, 5, 6, 6, 9, 15]}
        width={700}
        height={300}/>)
}

export default App;