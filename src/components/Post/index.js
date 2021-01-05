import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = (props) => {
    return (
        <View style={styles.container}>

           {/* Image */}
           <Image style={styles.image}  source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'  }} />
           
           {/* Bed and bedroom */}
           <Text style={styles.bedrooms} >1 bed 1 bedroom</Text>
          
           {/* type and description */}
           <Text style={styles.description} numberOfLines={2} >
            Sint consectetur excepteur in excepteur magna est mollit. Nisi laboris mollit aute ullamco excepteur laborum proident pariatur exercitation laboris aliquip tempor ipsum est. Officia exercitation id quis sunt irure quis exercitation. Officia est est proident et aute mollit aliquip exercitation amet fugiat et pariatur reprehenderit aute. Duis id proident nulla ullamco nostrud est eiusmod consequat. Esse sunt id et excepteur laborum sunt ullamco consectetur ea est dolor.
           </Text>
           
           {/* Old Price, New Price */}
           <Text style={styles.prices} > 
                <Text style={styles.oldPrice}> $36</Text>
                <Text style={styles.newPrice} >    $30</Text>
                / night      
           </Text>
          
           {/* Total Price */}
             <Text style={styles.totalPrice}>$230 total</Text>
           
        </View>
    );
};

export default Post;