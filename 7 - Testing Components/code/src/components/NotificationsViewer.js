import React, { Component } from "react";
import NotificationsService from "./services/NotificationsService";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: -1
        };
    }

    async componentDidMount() {
        let { count } = await NotificationsService.GetNotifications();
        this.setState = {
            count
        };
    }

    render() {
        return (
            <section className="mt-3 mb-2">
                <div className="notifications">
                    {this.state.count != -1
                        ? `${this.state.count} Notifications Awaiting`
                        : `Loading...`}
                </div>
            </section>
        );
    }
}
