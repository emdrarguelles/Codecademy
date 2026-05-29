import React from "react";

export const Tile = ({ id, name, description, onDelete, onStatusUpdate, status }) => {
  return (
    <div className={`tile-container ${status === 'complete' ? 'tile-complete' : ""} ${status === 'cancelled' ? 'tile-cancelled' : ""}`}>
      <p className="tile-title">{name}</p>
      {Object.values(description).filter(value => value !== '' && value !== undefined).map((value, index) => (
        <p key={index} className="tile">{value}</p>
        ))
      }
      {onStatusUpdate && (
        <div className="status-buttons">
          <button className={`btn-complete ${status === 'complete' ? 'btn-active-complete' : ''} ${status === 'cancelled' ? 'btn-inactive' : ''}`} onClick={() => onStatusUpdate(id, 'complete')}>✓ Done</button>
          <button className={`btn-cancelled ${status === 'cancelled' ? 'btn-active-cancelled' : ''} ${status === 'complete' ? 'btn-inactive' : ''}`} onClick={() => onStatusUpdate(id, 'cancelled')}>✗ Cancelled</button>
        </div>
      )}
      <button className="delete-btn" onClick={() => onDelete(id)}>X</button>
    </div>
  );
};
