import React from 'react';
import withAuth from '../../components/withAuth'
import API from '../../utils/API';
import moment from 'moment'

class Sun extends React.Component {
    state = {
        HD: null,
        title: null,
        body: null,
        diam: null,
        count: null,
        nearEarth: '',
    }
    componentDidMount() {
        API.getSunInfo().then(res => {
           const newDay = moment().format('YYYY-MM-DD')
           console.log(res.data.near_earth_objects + newDay)
            const hd = res.data.hdurl
            console.log(res.data.near_earth_objects[newDay])
            this.setState({
                nearEarth: res.data.near_earth_objects[newDay],
                count: res.data.element_count
            })
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <h1>Asteriod's Close Today Info Page</h1>
                {/* <img src={this.state.HD} alt={this.state.HD}/> */}
                {(this.state.nearEarth.length > 0 && true) ? 
                    (this.state.nearEarth.map(x => 
                    <div key={x.id}>
                        <h1 >
                            {x.name}
                        </h1>
                         <h2>
                             Will We Die
                         </h2>
                            <h3>{x.is_potentially_hazardous_asteroid ? ('YES'):('NO, Thank Gosh!')}</h3>
                        
                    </div>
                )) : (null)}
            </div>
            )
        }
}

export default withAuth(Sun)