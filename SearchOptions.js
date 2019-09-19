import React from "react";
import NavigationBar from "./NavigationBar";
import ViewData from "./viewData";
import { connect } from "react-redux"
import Checkbox from "./checkbox";
import InputBox from "./inputBox";
import Button from "./button";
import styled from 'styled-components';

class SearchOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'LevelId',
      levelIdEanValue: '',
      cashcheckBoxValue: '',
      deletecheckBoxValue: '',
      searchValue: '',
    }
  }

  searchClick = event => {
    event.preventDefault();
    if (this.state.radioValue == 'LevelId') {
      const value = "Search value is" + ' ' + this.state.radioValue + '-' + this.state.levelIdEanValue + '-' + this.state.cashcheckBoxValue + '-' + this.state.deletecheckBoxValue;
      this.props.searchUpdated(value);
    } else if (this.state.radioValue == 'EAN') {
      const value = "Search value is" + ' ' + this.state.radioValue + '-' + this.state.levelIdEanValue + '-' + this.state.cashcheckBoxValue + '-' + this.state.deletecheckBoxValue;
      this.props.searchUpdated(value);
    }
  }

  levelIdChange = event => {
    const value = event.target.value;
    this.setState({ levelIdEanValue: value });
  }

  cashCheckBoxChange = event => {
    if (event.target.checked) {
      const value = event.target.value;
      this.setState({ cashcheckBoxValue: value });
    } else {
      this.setState({ cashcheckBoxValue: '' });
    }
  }
  deleteCheckBoxChange = event => {
    if (event.target.checked) {
      const value = event.target.value;
      this.setState({ deletecheckBoxValue: value });
    } else {
      this.setState({ deletecheckBoxValue: '' });
    }
  }
  radioChange = (event) => {
    const value = event.target.value;
    this.setState({ radioValue: value });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <SearchContainer>
          <LevelIdEanBorder>
            <div>
              <Margin>
                <input type="radio" name="selection" value="LevelId" defaultChecked onChange={this.radioChange} />Level Id <br />
              </Margin>
              <Margin>
                <input type="radio" name="selection" value="EAN" onChange={this.radioChange} />EAN <br />
              </Margin>
            </div>
            <Margin>
              <InputBox onChange={this.levelIdChange} />
            </Margin>
          </LevelIdEanBorder>
          <CheckboxBorder>
            <div><Checkbox value="cash" onChange={this.cashCheckBoxChange} />Cash</div>
            <div><Checkbox value="delete" onChange={this.deleteCheckBoxChange} />Delete</div>
          </CheckboxBorder>
        </SearchContainer>
        <ButtonMargin>
          <Button onClick={this.searchClick} />
        </ButtonMargin>
        <SearchResults>
          <ViewData />
        </SearchResults>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchUpdated: (details) => dispatch({ type: 'LOGINDETAILS', searchvalue: details }),
  }

}
function mapStateToProps(state) {
  console.log(state);
  return {
    searchValueStore: state.data.details,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);


const CheckboxBorder = styled.div`
  border: 1px solid;
  margin: 0 auto;
  width: 150px;
`;

const Margin = styled.div`
  margin: 10px
`;

const LevelIdEanBorder = styled.div`
  border: 1px solid;
  margin: 0 auto;
  display: flex;
`;

const ButtonMargin = styled.div`
  width :10px;
  margin: 0 auto;
`;

const SearchResults = styled.div`
  text-align: center;
  color: red;
`;

const SearchContainer = styled.div`
  display: flex;
`;