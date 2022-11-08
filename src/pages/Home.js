import "./style.css"
import Item from "../components/Item";
import Bottom from "../components/Bottom";

function Home() {

  return (
    <div>
      <div className="nav-bar">
        <button className="btn-add"><i class="fa-solid fa-plus fa-2x add"></i></button>
        <button className="btn-delete"><i class="fa-solid fa-trash fa-2x delete"></i></button>
      </div>
      <div id="table_wrapper">
        <div id="header">
          <div id="head1">
            <input type="checkbox" />
          </div>
          <div id="head2">Name</div>
          <div id="head3">Genre</div>
          <div id="head4">Actions</div>
        </div>
        <div id="tbody">
          <table>
            <tr>
              <Item
                nameSong="Head in the cloud"
                nameSinger="Hayd"
                genre="Pop"
                actions="Play" />
            </tr>
            <tr>
              <Item />
            </tr>
          </table>
        </div>
      </div>
      <div className="bottom">
        <Bottom
          total={2}
          selected={0}
        />
      </div>
    </div>
  );
}

export default Home;