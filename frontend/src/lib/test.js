// import React from 'react'
// import Auth from '../../lib/auth'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// // import GroupAmend from './GroupAmend'
// class GroupCard extends React.Component {
//   state = {
//     group: {
//       group_name: '',
//       attendees: [],
//       event: {},
//       owner: {},
//       id: ''
//     },
//     errors: {}
//   }
//   isOwner = () => Auth.getPayload().sub === this.state.group.owner.id
//   async componentDidMount() {
//     const groupId = this.props.id
//     const eventId = this.props.event.id
//     try {
//       const response = await axios.get(`/api/events/${eventId}/event_groups/${groupId}/`)
//       this.setState({ group: response.data })
//     } catch (error) {
//       this.setState({ errors: error.response.data.errors })
//     }
//   }
//   handleClick = async e => {
//     e.preventDefault()
//     const userId = Auth.getPayload().sub
//     const attendeesArray = this.state.group.attendees
//     try {
//       const user = await axios.get(`/api/user/${userId}`)
//       const currentUser = attendeesArray.filter(attendee => attendee.id === userId)[0]
//       const index = attendeesArray.indexOf(currentUser)
//       attendeesArray.some(attendee => attendee.id === user.data.id) ?
//         attendeesArray.splice(index, 1) :
//         attendeesArray.push(user.data)
//       this.setState({ attendees: attendeesArray })
//       this.handleSubmit()
//     } catch (err) {
//       console.log(err.response.data)
//     }
//   }




//   handleSubmit = async e => {
//     const { group } = this.state
//     const sendData = {
//       group_name: group.group_name,
//       attendees: group.attendees.map(attendee => attendee.id),
//       event: group.event,
//       owner: group.owner,
//       id: group.id
//     }
//     const groupId = this.props.id
//     const eventId = this.props.event.id
//     try {
//       await axios.put(`/api/events/${eventId}/event_groups/${groupId}/`, sendData, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}` }
//       })
//     } catch (err) {
//       console.log(err.response.data)
//     }
//   }







  
//   deleteGroup = async () => {
//     const groupId = this.props.id
//     const eventId = this.props.event.id
//     console.log(this.props)
//     try {
//       await axios.delete(`/api/events/${eventId}/event_groups/${groupId}/`, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}` }
//       })
//       window.location.reload(false)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   render() {
//     const userId = Auth.getPayload().sub
//     const { group } = this.state
//     const lead = group.attendees[0]
//     return (
//       <>
//         <div className="card">
//           <div className="card-info">
//             <h2>{group.group_name}</h2>
//           </div>
//           {lead && <h3>Leader: {lead.username}</h3>}
//           {group.attendees !== null ?
//             <h3>Attendees: {group.attendees.map((attendee, i) => {
//               return <li key={i}><Link to={`/user/${attendee.id}`}>{attendee.username}</Link></li>
//             })}</h3>
//             : null}
//           {group.attendees !== null ?
//             (Auth.isAuthenticated() ?
//               <div className="buttons">
//                 {group.attendees.some(attendee => attendee.id === userId) ?
//                   <div>
//                     <button type="button" className="button" onClick={this.handleClick}>Leave</button>
//                   </div> :
//                   <div>
//                     <button type="button" className="button" onClick={this.handleClick}>Join</button>
//                   </div>}
//                 {this.isOwner() && <div>
//                   <Link to={`/events/${group.event.id}/event_groups/${group.id}/amend`}>
//                     <button type="button" className="button">Change Group Info</button>
//                   </Link>
//                   <button onClick={this.deleteGroup} type="button" className="button">Delete Group</button>
//                 </div>
//                 }
//               </div>
//               : null)
//             : null}
//         </div>
//       </>
//     )
//   }
// }
// export default GroupCard









// // async componentDidMount() {
// //   const clubId = this.props.match.params.id
// //   try {
// //     const res = await axios.get(`/api/clubs/${clubId}/`)
// //     console.log('this is res .data.member', res.data.member)
// //     this.setState({ members: res.data.member })
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }




//       {/* <div className="fake-member-card">
//         <img className="fake-member-pic" alt="fake-member" src="https://www.kkmm.gov.my/images/sub_bahagian/icon.png"/>
//         <p>Join this club!</p>
//       </div> */}