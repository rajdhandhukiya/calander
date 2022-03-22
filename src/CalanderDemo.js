// import React from 'react';
// import { Eventcalendar, snackbar, setOptions, Popup, Button, Input, Textarea, Switch, Datepicker, SegmentedGroup, SegmentedItem } from '@mobiscroll/react-lite';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });

// const now = new Date();
// const defaultEvents = [{
//     id: 1,
//     start: '2022-03-08T13:00',
//     end: '2022-03-08T13:45',
//     title: 'Lunch @ Butcher\'s',
//     description: '',
//     allDay: false,
//     free: true,
//     color: '#009788'
// }, {
//     id: 2,
//     start: '2022-03-16T15:00',
//     end: '2022-03-16T16:00',
//     title: 'General orientation',
//     description: '',
//     allDay: false,
//     free: false,
//     color: '#ff9900'
// }, {
//     id: 3,
//     start: '2022-03-15T18:00',
//     end: '2022-03-15T22:00',
//     title: 'Dexter BD',
//     description: '',
//     allDay: false,
//     free: true,
//     color: '#3f51b5'
// }, {
//     id: 4,
//     start: '2022-03-17T10:30',
//     end: '2022-03-17T11:30',
//     title: 'Stakeholder mtg.',
//     description: '',
//     allDay: false,
//     free: false,
//     color: '#f44437'
// }];

// const viewSettings = {
//     calendar: { labels: true }
// };
// const responsivePopup = {
//     medium: {
//         display: 'anchored',
//         width: 400,
//         fullScreen: false,
//         touchUi: false
//     }
// };
// const colorPopup = {
//     medium: {
//         display: 'anchored',
//         touchUi: false,
//         buttons: []
//     }
// }
// const colors = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#3f51b5', '', '#009788', '#4baf4f', '#7e5d4e'];

// function CalanderDemo() {
//     const [myEvents, setMyEvents] = React.useState(defaultEvents);
//     const [tempEvent, setTempEvent] = React.useState(null);
//     const [isOpen, setOpen] = React.useState(false);
//     const [isEdit, setEdit] = React.useState(false);
//     const [anchor, setAnchor] = React.useState(null);
//     const [start, startRef] = React.useState(null);
//     const [end, endRef] = React.useState(null);
//     const [popupEventTitle, setTitle] = React.useState('');
//     const [popupEventDescription, setDescription] = React.useState('');
//     const [popupEventAllDay, setAllDay] = React.useState(true);
//     const [popupEventDate, setDate] = React.useState([]);
//     const [popupEventStatus, setStatus] = React.useState('busy');
//     const [mySelectedDate, setSelectedDate] = React.useState(now);
//     const [colorPickerOpen, setColorPickerOpen] = React.useState(false);
//     const [colorAnchor, setColorAnchor] = React.useState(null);
//     const [selectedColor, setSelectedColor] = React.useState('');
//     const [tempColor, setTempColor] = React.useState('');
//     const colorPicker = React.useRef();
//     const colorButtons = React.useMemo(() => [
//         'cancel',
//         {
//             text: 'Set',
//             keyCode: 'enter',
//             handler: () => {
//                 setSelectedColor(tempColor);
//                 setColorPickerOpen(false);
//             },
//             cssClass: 'mbsc-popup-button-primary'
//         }
//     ], [tempColor]);

//     const saveEvent = React.useCallback(() => {
//         const newEvent = {
//             id: tempEvent.id,
//             title: popupEventTitle,
//             description: popupEventDescription,
//             start: popupEventDate[0],
//             end: popupEventDate[1],
//             allDay: popupEventAllDay,
//             status: popupEventStatus,
//             color: tempEvent.color,
//             color: selectedColor
//         };
//         if (isEdit) {
//             const index = myEvents.findIndex(x => x.id === tempEvent.id);;
//             const newEventList = [...myEvents];

//             newEventList.splice(index, 1, newEvent);
//             setMyEvents(newEventList);
//         } else {
//             setMyEvents([...myEvents, newEvent]);
//         }
//         setSelectedDate(popupEventDate[0]);
//         setOpen(false);
//     }, [isEdit, myEvents, popupEventAllDay, popupEventDate, popupEventDescription, popupEventStatus, popupEventTitle, tempEvent, selectedColor]);

//     const deleteEvent = React.useCallback((event) => {
//         setMyEvents(myEvents.filter(item => item.id !== event.id));
//         setTimeout(() => {
//             snackbar({
//                 button: {
//                     action: () => {
//                         setMyEvents(prevEvents => [...prevEvents, event]);
//                     },
//                     text: 'Undo'
//                 },
//                 message: 'Event deleted'
//             });
//         });
//     }, [myEvents]);

//     const loadPopupForm = React.useCallback((event) => {
//         setTitle(event.title);
//         setDescription(event.description);
//         setDate([event.start, event.end]);
//         setAllDay(event.allDay || false);
//         setStatus(event.status || 'busy');
//         setSelectedColor(event.color || '');
//     }, []);

//     const titleChange = React.useCallback((ev) => {
//         setTitle(ev.target.value);
//     }, []);

//     const descriptionChange = React.useCallback((ev) => {
//         setDescription(ev.target.value);
//     }, []);

//     const allDayChange = React.useCallback((ev) => {
//         setAllDay(ev.target.checked);
//     }, []);

//     const dateChange = React.useCallback((args) => {
//         setDate(args.value);
//     }, []);

//     const statusChange = React.useCallback((ev) => {
//         setStatus(ev.target.value);
//     }, []);

//     const onDeleteClick = React.useCallback(() => {
//         deleteEvent(tempEvent);
//         setOpen(false);
//     }, [deleteEvent, tempEvent]);

//     // scheduler options

//     const onSelectedDateChange = React.useCallback((event) => {
//         setSelectedDate(event.date);
//     });

//     const onEventClick = React.useCallback((args) => {
//         setEdit(true);
//         setTempEvent({ ...args.event });
//         loadPopupForm(args.event);
//         setAnchor(args.domEvent.target);
//         setOpen(true);
//     }, [loadPopupForm]);

//     const onEventCreated = React.useCallback((args) => {
//         setEdit(false);
//         setTempEvent(args.event)
//         loadPopupForm(args.event);
//         setAnchor(args.target);
//         setOpen(true);
//     }, [loadPopupForm]);

//     const onEventDeleted = React.useCallback((args) => {
//         deleteEvent(args.event)
//     }, [deleteEvent]);

//     const onEventUpdated = React.useCallback((args) => {
//     }, []);

//     const controls = React.useMemo(() => popupEventAllDay ? ['date'] : ['datetime'], [popupEventAllDay]);
//     const respSetting = React.useMemo(() => popupEventAllDay ? {
//         medium: {
//             controls: ['calendar'],
//             touchUi: false
//         }
//     } : {
//             medium: {
//                 controls: ['calendar', 'time'],
//                 touchUi: false
//             }
//         }, [popupEventAllDay]);

//     const headerText = React.useMemo(() => isEdit ? 'Edit event' : 'New Event', [isEdit]);
//     const popupButtons = React.useMemo(() => {
//         if (isEdit) {
//             return [
//                 'cancel',
//                 {
//                     handler: () => {
//                         saveEvent();
//                     },
//                     keyCode: 'enter',
//                     text: 'Save',
//                     cssClass: 'mbsc-popup-button-primary'
//                 }
//             ];
//         }
//         else {
//             return [
//                 'cancel',
//                 {
//                     handler: () => {
//                         saveEvent();
//                     },
//                     keyCode: 'enter',
//                     text: 'Add',
//                     cssClass: 'mbsc-popup-button-primary'
//                 }
//             ];
//         }
//     }, [isEdit, saveEvent]);

//     const onClose = React.useCallback(() => {
//         if (!isEdit) {
//             setMyEvents([...myEvents]);
//         }
//         setOpen(false);
//     }, [isEdit, myEvents]);

//     const selectColor = React.useCallback((color) => {
//         setTempColor(color)
//     }, []);

//     const openColorPicker = React.useCallback((ev) => {
//         selectColor(selectedColor || '');
//         setColorAnchor(ev.currentTarget);
//         setColorPickerOpen(true);
//     }, [selectColor, selectedColor]);

//     const changeColor = React.useCallback((ev) => {
//         const color = ev.currentTarget.getAttribute('data-value');
//         selectColor(color);
//         if (!colorPicker.current.s.buttons.length) {
//             setSelectedColor(color);
//             setColorPickerOpen(false);
//         }
//     }, [selectColor, setSelectedColor]);

//     return <div>
//         <Eventcalendar
//             view={viewSettings}
//             data={myEvents}
//             clickToCreate="double"
//             dragToCreate={true}
//             dragToMove={true}
//             dragToResize={true}
//             selectedDate={mySelectedDate}
//             onSelectedDateChange={onSelectedDateChange}
//             onEventClick={onEventClick}
//             onEventCreated={onEventCreated}
//             onEventDeleted={onEventDeleted}
//             onEventUpdated={onEventUpdated}
//         />
//         <Popup
//             display="bottom"
//             fullScreen={true}
//             contentPadding={false}
//             headerText={headerText}
//             anchor={anchor}
//             buttons={popupButtons}
//             isOpen={isOpen}
//             onClose={onClose}
//             responsive={responsivePopup}
//         >
//             <div className="mbsc-form-group">
//                 <Input label="Title" value={popupEventTitle} onChange={titleChange} />
//                 <Textarea label="Description" value={popupEventDescription} onChange={descriptionChange} />
//             </div>
//             <div className="mbsc-form-group">
//                 <Switch label="All-day" checked={popupEventAllDay} onChange={allDayChange} />
//                 <Input ref={startRef} label="Starts" />
//                 <Input ref={endRef} label="Ends" />
//                 <Datepicker
//                     select="range"
//                     controls={controls}
//                     touchUi={true}
//                     startInput={start}
//                     endInput={end}
//                     showRangeLabels={false}
//                     responsive={respSetting}
//                     onChange={dateChange}
//                     value={popupEventDate}
//                 />
//                 <div onClick={openColorPicker} className="event-color-c">
//                     <div className="event-color-label">Color</div>
//                     <div className="event-color" style={{ background: selectedColor }}></div>
//                 </div>
//                 <SegmentedGroup onChange={statusChange}>
//                     <SegmentedItem value="busy" checked={popupEventStatus === 'busy'}>Show as busy</SegmentedItem>
//                     <SegmentedItem value="free" checked={popupEventStatus === 'free'}>Show as free</SegmentedItem>
//                 </SegmentedGroup>
//                 {isEdit ? <div className="mbsc-button-group"><Button className="mbsc-button-block" color="danger" variant="outline" onClick={onDeleteClick}>Delete event</Button></div> : null}
//             </div>
//         </Popup>
//         <Popup
//             display="bottom"
//             contentPadding={false}
//             showArrow={false}
//             showOverlay={false}
//             anchor={colorAnchor}
//             isOpen={colorPickerOpen}
//             buttons={colorButtons}
//             responsive={colorPopup}
//             ref={colorPicker}
//         >
//             <div className="crud-color-row">
//                 {colors.map((color, index) => {
//                     if (index < 5) {
//                         return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
//                             <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
//                         </div>
//                     } else return null;
//                 })}
//             </div>
//             <div className="crud-color-row">
//                 {colors.map((color, index) => {
//                     if (index >= 5) {
//                         return <div key={index} onClick={changeColor} className={"crud-color-c " + (tempColor === color ? 'selected' : '')} data-value={color}>
//                             <div className="crud-color mbsc-icon mbsc-font-icon mbsc-icon-material-check" style={{ background: color }}></div>
//                         </div>
//                     } else return null;
//                 })}
//             </div>
//         </Popup>
//     </div>
// }

// export default CalanderDemo
// import React from 'react';
// import { Eventcalendar, Draggable, setOptions, getJson, toast } from '@mobiscroll/react';

// import './App.css'
// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });

// const now = new Date();

// function CalanderDemo() {
//     const [myEvents, setEvents] = React.useState([]);
//     const [draggableMeeting, setDraggableMeeting] = React.useState();
//     const [draggableRetreat, setDraggableRetreat] = React.useState();
//     const [draggableBlank, setDraggableBlank] = React.useState();

//     const setMeetingElm = React.useCallback((elm) => {
//         setDraggableMeeting(elm);
//     }, []);   
    
//     const setRetreatElm = React.useCallback((elm) => {
//         setDraggableRetreat(elm);
//     }, []); 
    
//     const setBlankElm = React.useCallback((elm) => {
//         setDraggableBlank(elm);
//     }, []);  
                    
//     const meetingData = {
//         title: 'QA meeting',
//         color: '#cf4343',
//         start: now,
//         end: now,
//     };
    
//     const retreatData = {
//         title: 'Team retreat',
//         color: '#1064b0',
//         start: now,
//         end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)
//     };
    
//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
//             setEvents(events);
//         }, 'jsonp');
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             calendar: { labels: true }
//         };
//     }, []);
    
//     const onEventCreate = React.useCallback((event) => {
//         toast({
//             message: 'Event dropped'
//         });
//     }, []);

//     return (
//         <div className="mbsc-grid mbsc-no-padding">
//             <div className="mbsc-row">
//                 <div className="mbsc-col-sm-9 external-drop-calendar">
//                     <Eventcalendar
//                         data={myEvents}
//                         view={view}
//                         dragToMove={true}
//                         externalDrop={true}
//                         onEventCreate={onEventCreate}
//                     />
//                 </div>
//                 <div className="mbsc-col-sm-3">
//                     <div className="mbsc-form-group-title">Available tasks</div>
                    
//                      <div ref={setMeetingElm} className="external-drop-task" style={{background: '#cf4343'}}>
//                         <div>Product team meeting</div>
//                         <div>1.5 h</div>
//                         <Draggable dragData={meetingData} element={draggableMeeting} />
//                     </div>
                    
//                     <div ref={setRetreatElm} className="external-drop-task" style={{background: '#1064b0'}}>
//                         <div>General orientation</div>
//                         <div>2 h</div>
//                         <Draggable dragData={retreatData} element={draggableRetreat} />
//                     </div>
                    
//                     <div ref={setBlankElm} className="external-drop-task external-drop-task-blank">
//                         <div>Blank event</div>
//                         <Draggable element={draggableBlank} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ); 
// }

// export default CalanderDemo;