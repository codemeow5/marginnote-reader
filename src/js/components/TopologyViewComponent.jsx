import React, {Component} from 'react';

import NoteBookTabsComponent from './NoteBookTabsComponent.jsx';

export default class TopologyViewComponent extends Component{
    render(){
        return (
            <div>
                <div className="fix-body-top notebook-tabs-box">
                    <NoteBookTabsComponent noteBookId={this.props.params.id} />
                </div>
                <div className="fix-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}