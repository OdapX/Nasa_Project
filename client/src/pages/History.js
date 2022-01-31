import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";

const History = (props) => {
  const tableBody = useMemo(() => {
    return props.launches
      ?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>
              <span style={{ color: launch.success ? "greenyellow" : "red" }}>
                █
              </span>
            </td>
            <td>{launch.Num_launch}</td>
            <td>{new Date(launch.Date).toDateString()}</td>
            <td>{launch.Mission}</td>
            <td>{launch.Rocket}</td>
            <td>{launch.Customers?.join(", ")}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <article id="history">
      <Appear animate show={props.entered}>
        <Paragraph>
          History of mission launches including SpaceX launches starting from
          the year 2006.
        </Paragraph>
        <Table animate>
          <table style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "2rem" }}></th>
                <th style={{ width: "3rem" }}>No.</th>
                <th style={{ width: "9rem" }}>Date</th>
                <th>Mission</th>
                <th style={{ width: "7rem" }}>Rocket</th>
                <th>Customers</th>
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </Table>
      </Appear>
    </article>
  );
};

export default History;
