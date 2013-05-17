window.onload=function()
{
	CANVAS = document.getElementById('scene');
	CONTEXT = CANVAS.getContext('2d');
	CONTEXT.fillStyle = "black";
	CONTEXT.lineWidth = 0;
	CANVAS.width = window.innerWidth-15;
	CANVAS.height = window.innerHeight-16;

	var amountX = parseInt(CANVAS.width/10);
	var amountY = parseInt(CANVAS.width/10);

	var hexDots = generate_array(amountX,amountY);
	size = 5;
	for(var i = 0; i < amountX; i++)
	{
		for(var j = 0; j < amountY; j++)
		{
				var random = Math.floor(Math.random(1)*100);
				var red = i+random;
				var green =  0;
				var blue =  random;
			var color = 'rgb(' + red + ',' + green + ',' + blue +')';
			hexDots[i][j] = new hexel(color);
		}
	}
	for(var i = 0; i < hexDots.length; i++)
	{
		for(var j = 0; j < hexDots[i].length; j++)
		{
			if(hexDots[i][j])
			{
				if(i%2==0)
				{
					var startX = j * size*5.9;
					var startY = i * size*1.70;	
				}else
				{
					var startX = -(size*5.9/2)+(j * (size*5.9));
					var startY = i * (size*1.70);
				}
				drawHexel(startX, startY, hexDots[i][j].color);
			}
		}
	
	}
}

function generate_array(row,column)
{
	var array_row_num = row;
	var array_column_num = column;

	var matrix = new Array(array_column_num);
	for(var increment=0; increment<array_column_num; increment++)
	{
		matrix[increment] = new Array(array_row_num);
	}
	return matrix;
}

function hexel(color)
{
	this.color = color;
}



function drawHexel(startX,startY,color)
{
	CONTEXT.fillStyle = color;
	CONTEXT.beginPath();
	CONTEXT.moveTo(startX,startY);
	CONTEXT.lineTo(startX-size, startY+(size*1.75));
	CONTEXT.lineTo(startX, startY+(2*size*1.75));
	CONTEXT.lineTo(startX+(2*size), startY+(2*size*1.75));
	CONTEXT.lineTo(startX+(3*size), startY+(size*1.75));
	CONTEXT.lineTo(startX+(2*size), startY);
	CONTEXT.lineTo(startX, startY);
	CONTEXT.fill();
}


function clearCanvas(){
	CONTEXT.clearRect(0,0,CANVAS.height,CANVAS.width);
}
