import React, { useState } from "react";
import { updateStatus } from "../../utils/api";
import ErrorAlert from "../ErrorAlert";

function ReservationView({ reservation }) {
    const [showError, setShowError] = useState(null);

    async function handleCancel(event) {
        event.preventDefault();
        const abortController = new AbortController();
        const message = "Are you SURE you want to CANCEL this reservation? This CANNOT be undone.";
        if (window.confirm(message)) {
            try {
                await updateStatus(
                    reservation.reservation_id,
                    "cancelled",
                    abortController.signal
                );
                window.location.reload(true);
            } catch (error) {
                if (error.name !== "AbortError") setShowError(error)
            }
        }
    }
}

return (
    <div className="border d-flex flex-column align-items-center p-2">
        <p data-reservation-id-status={reservation.reservation_id}>
            {reservation.status}
        </p>
        <p>
            Name: {reservation.first_name} {reservation.last_name}
        </p>
        <p>
            mobile: {reservation.mobile_number}
        </p>
        <p>
            Party Size: {reservation.people}
        </p>
        <p>
            {reservation.reservation_date} at {reservation.reservation_time}
        </p>
        <div>
            <ErrorAlert error={showError} />
            {reservation.status === "booked" ? (
                <button className="btn btn-success my-3 mr-3 px-3 py-2">
                    <a
                        href={`/reservations/${reservation.reservation_id}/seat`}
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        Seat
                    </a>
                </button>
            ):null}
            
        </div>
    </div>
);

export default ReservationView