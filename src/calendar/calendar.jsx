import React from "react";
import "./calendar.css";
import { useNavigate } from "react-router-dom";

export default function Calendar() {
  const navigate = useNavigate();
  return (
    <div className="calendar-page">
      <h1>Welcome to Ultimate Calendar</h1>

      <div style={{ textAlign: "center", margin: "20px" }}>
       <button onClick={() => navigate("/addEvent")}>+</button>
      </div>

      <h2 style={{ textAlign: "center" }}>January 2025</h2>

      <br />

      <table
        style={{ margin: "0 auto" }}
        cellSpacing="30"
        cellPadding="30"
      >
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr></tr>
          <tr>
            <td>3</td>
            <td>4</td>
            <td>
              5
              <br />
              <a href="/event">example event</a>
            </td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td className="today">30</td>
          </tr>
          <tr>
            <td>31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "10px",
          backgroundColor: "#f0f0f0",
        }}
      >
        <p>
          Created by{" "}
          <a
            href="https://github.com/atkfuller/startup.git"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
