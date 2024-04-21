
// ProductCardComponent.js
import './index.css'

const ProductCard = ({image,title,descritption}) => {

  return (
    <>
    <div className="images-sidebar-container">
    <div className="side-bar-container">

    <div className="checkbox-container">
    <a href="/checkboxItems"><img src="https://i.ibb.co/sjxTshj/Checkbox.png" alt="Checkbox" border="0" className="checkbox"/></a>
     <p className="customiazale-para">CUSTOMIZABLE</p>
    </div>
    <hr />

    <div className="ideal-container">
      <p className="ideal-for-para">IDEAL FOR</p>
      <a href="/idealItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="ideal-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="occassion-container">
      <p className="occassion-for-para">OCCASSION</p>
      <a href="/occassionItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="occassion-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="work-container">
      <p className="work-for-para">WORK</p>
      <a href="/workItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="work-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    
    <div className="fabric-container">
      <p className="fabric-for-para">FABRIC</p>
      <a href="/fabricItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="fabric-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="segment-container">
      <p className="segment-for-para">SEGMENT</p>
      <a href="/segmentItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="segment-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

   
    <div className="segmentall-container">
      <p className="segmentall-for-para">SEGMENT ALL</p>
      <a href="/segmentAllItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="segmentall-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />

    <div className="raw-material-container">
      <p className="raw-material-for-para">RAW MATERIALS</p>
      <a href="/rawMaterialItems"><img src="https://i.ibb.co/4FdBKD9/arrow-left.png" alt="arrow-left"  border="0" className="raw-material-icon"/></a>
    </div>
    <p className="all-para">All</p>
    <hr />
    </div>
   <div className="rows">
    <div className="products-card-container">
      
        <div className="first-produt-container">
          
         
          <img src="https://i.ibb.co/MBPC7P7/Image.png" alt="product 1" className="product-image" />
          
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
        
        <div className="second-product-container"> 
          
          <img src="https://i.ibb.co/M2JTsDr/Image.png" alt="product3" className="product-image" />
           
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          
          <img src="https://i.ibb.co/JyPNxgQ/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/L1Ym8T6/heart.png" alt="heart" border="0" /></a>
          
        </div>
        </div>

        
      </div>


      {/*second row products*/}
      <div className="second-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <img src="https://i.ibb.co/KD9f3kt/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
         
         <img src="https://i.ibb.co/ctFdQNs/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          
          <img src="https://i.ibb.co/QD5PsXw/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>
        
        {/*third row products*/}
        <div className="third-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
         <img src="https://i.ibb.co/18m50wN/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
        
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          
         <img src="https://i.ibb.co/JkMFVZv/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          
         <img src="https://i.ibb.co/7SmPJ4w/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/L1Ym8T6/heart.png" alt="heart" className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>

        {/*fourth row products*/}
        <div className="fourth-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <img src="https://i.ibb.co/2yLyZ9t/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
         
          <img src="https://i.ibb.co/m6J8fPp/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          
          <img src="https://i.ibb.co/3MmRL8r/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>

        {/*fifth row products*/}

        <div className="fifth-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <img src="https://i.ibb.co/JyPNxgQ/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
        
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
          
          <img src="https://i.ibb.co/M2JTsDr/Image.png" alt="product 2" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          
          <img src="https://i.ibb.co/KD9f3kt/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>


        {/*last row products*/}
        <div className="sixth-row-container">
        <div className="products-card-container">
          <div className="first-produt-container">
          <img src="https://i.ibb.co/7SmPJ4w/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>
          
        <div className="second-product-container"> 
         
          <img src="https://i.ibb.co/ctFdQNs/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PPXOC MILKYWAY DRESS IN ....
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

        <div className="third-product-container"> 
          
          <img src="https://i.ibb.co/3MmRL8r/Rectangle-29438.png" alt="Rectangle-29438" className="product-image"/>
          <h1 className="first-product-heading">
            PRODUCT NAME
          </h1>
          <div className="first-product-para-container">
          <p className="first-product-para">
          Sign in or Create an account to see pricing
          </p>
          <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="heart-image"/></a>
          
        </div>
        </div>

          </div>

        </div>
















      </div>
      
      </div>
      
 
   

      </>
  );
};

export default ProductCard;