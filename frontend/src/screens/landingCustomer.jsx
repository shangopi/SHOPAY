import React from "react";
import HomeScreen from "./HomeScreen";

const CustomerLanding = () => {
  return (
    <div>
      <Header />
      <div className="row m-0">
        <div className="col-1">
          <SideBar handleCategory={handleCategory} />
        </div>
        <div className="col-10">
          <main className="py-3">
            <Container>
              <Route
                path="/"
                component={
                  products && (() => <HomeScreen products={products} />)
                }
                exact
              />
            </Container>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerLanding;
